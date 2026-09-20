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
		"content": `<style>.v4unuob5s {
  fill: currentColor;
  d: path("M5 21V8.399q0-1.26.85-2.214T8 5.054V3h2v2h4V3h2v2.054q1.3.177 2.15 1.129t.85 2.22V21zm10.116-5.423h1v-2.923H7.885v1h7.23z");
}
</style><path class="v4unuob5s"/>`,
		"fallback": "material-symbols-light:backpack-sharp",
	});
}

export default Component;
