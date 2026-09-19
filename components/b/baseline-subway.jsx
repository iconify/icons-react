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
		"content": `<style>.h1qnjkbuv {
  cx: 8.5px;
  cy: 16px;
  r: 1px;
  fill: currentColor;
}

.judm3s39l {
  cx: 15.5px;
  cy: 16px;
  r: 1px;
  fill: currentColor;
}

.rir0lm6ob {
  fill: currentColor;
  d: path("M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2s-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06m.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3c3.32 0 6 .38 6 3z");
}
</style><circle class="judm3s39l"/><circle class="h1qnjkbuv"/><path class="rir0lm6ob"/>`,
		"fallback": "ic:baseline-subway",
	});
}

export default Component;
