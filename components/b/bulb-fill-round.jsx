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
		"content": `<style>.t7x77cc5q {
  fill: currentColor;
  d: path("M16 15v1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-1c0-.17-.141-.401-.225-.542q-.195-.325-.786-1.102C6.013 12.076 5 10.686 5 9a7 7 0 1 1 14 0c0 1.686-1.013 3.076-1.989 4.356q-.591.777-.786 1.102c-.084.141-.225.372-.225.542m-1 7H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2");
}
</style><path class="t7x77cc5q"/>`,
		"fallback": "coolicons:bulb-fill-round",
	});
}

export default Component;
