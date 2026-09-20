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
		"content": `<style>.m8azdhbub {
  fill: currentColor;
  d: path("m10.8 15.8l4.067-3.633l-.236-.665l-3.004-.273l1.96-2.673l-.362-.406l-4.048 3.639l.217.684l3.004.273l-1.946 2.667zm1.22 3.2q-1.324 0-2.494-.457t-2.107-1.256L5.5 19.214l-.713-.714l1.927-1.919q-.8-.937-1.257-2.107T5 11.981q0-2.923 2.046-4.952T12.016 5H19v6.983q0 2.925-2.029 4.97Q14.943 19 12.02 19");
}
</style><path class="m8azdhbub"/>`,
		"fallback": "material-symbols-light:energy-savings-leaf-sharp",
	});
}

export default Component;
