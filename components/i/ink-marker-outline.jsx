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
		"content": `<style>.qwbwgegos {
  fill: currentColor;
  d: path("m6.839 20.016l-.835-.835l-.82.819q-.244.244-.575.247q-.332.003-.57-.247q-.245-.244-.245-.573t.244-.573l.82-.82l-.835-.846L16.681 4.531q.242-.243.552-.243t.551.243l1.724 1.723q.242.242.242.552t-.242.552zm4.261-8.477l-5.661 5.65L6.85 18.6l5.65-5.661z");
}
</style><path class="qwbwgegos"/>`,
		"fallback": "material-symbols-light:ink-marker-outline",
	});
}

export default Component;
