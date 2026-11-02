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
		"content": `<style>.txqw7zbig {
  fill: currentColor;
  d: path("M2 5a1 1 0 0 1 1-1h13a6 6 0 0 1 6 6v8a1 1 0 0 1-1 1h-1.171a3 3 0 0 1-5.658 0H9.829a3 3 0 0 1-5.658 0H3a1 1 0 0 1-1-1Zm6 1H4v3h4Zm2 0v3h3.78l-.6-3Zm10 4a3.98 3.98 0 0 0-1.15-2.807l-.002-.001l-.041-.041V7.15A3.98 3.98 0 0 0 16 6h-.78L16 9.901V11h4ZM6.291 18.705l.002.002l.002.002a1 1 0 0 0 1.41 0l.002-.002l.002-.002a1 1 0 0 0 0-1.41l-.002-.002l-.002-.002a1 1 0 0 0-1.41 0l-.002.002l-.002.002a1 1 0 0 0 0 1.41m11.414.004l.002-.002l.002-.002a1 1 0 0 0 0-1.41l-.002-.002l-.002-.002a1 1 0 0 0-1.41 0l-.002.002l-.002.002a1 1 0 0 0 1.414 1.414");
}
</style><path class="txqw7zbig"/>`,
		"fallback": "coolicons:coach-fill-sharp",
	});
}

export default Component;
