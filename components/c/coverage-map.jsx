import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h-9p8ghum {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.853 4.369Q1.25 4.985 1.25 6.702v11.75q0 1.316 1.085 2.06q1.084.745 2.312.273l3.516-1.352q.347-.133.696-.009l5.778 2.064q.873.312 1.738-.021l4.772-1.836q1.603-.616 1.603-2.333V5.548q0-1.316-1.085-2.06q-1.084-.745-2.312-.273l-3.516 1.352q-.347.133-.696.009L9.363 2.512q-.873-.312-1.738.021z");
}
</style><path class="h-9p8ghum"/>`,
		"fallback": "uix-solid:coverage-map",
	});
}

export default Component;
