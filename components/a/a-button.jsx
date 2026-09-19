import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hd6t3iykl {
  fill: var(--svg-color--ff5a79, #ff5a79);
  d: path("M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10z");
}

.tlhi8fllp {
  fill: var(--svg-color--fff, #fff);
  d: path("M41.7 46H47L35 14h-6L17 46h5.3l4.2-11.2h11.1zM28.3 30l3.7-9.9l3.7 9.9z");
}
</style><path class="hd6t3iykl"/><path class="tlhi8fllp"/>`,
		"fallback": "emojione:a-button",
	});
}

export default Component;
