import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rurneccdw {
  fill: currentColor;
  d: path("m15.712 14.767l-.71.735V2.75a.75.75 0 1 0-1.5 0v12.756l-.713-.739a.75.75 0 0 0-1.078 1.042l1.82 1.886a1 1 0 0 0 1.44 0l1.82-1.886a.75.75 0 0 0-1.079-1.042M5 17a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6.25a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h4.25a.75.75 0 0 1 0 1.5z");
}
</style><path class="rurneccdw"/>`,
		"fallback": "fluent:arrow-autofit-down-20-filled",
	});
}

export default Component;
