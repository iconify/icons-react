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
		"content": `<style>.b8p-1wb_q {
  cx: 25px;
  cy: 19px;
  r: 13px;
  fill: var(--svg-color--fff, #fff);
}

.u55udyb2u {
  fill: var(--svg-color--333, #333);
  d: path("M52.6 0H11.4C9 0 7 1.8 7 4.1v55.8c0 2.3 2 4.1 4.4 4.1h41.2c2.4 0 4.4-1.8 4.4-4.1V4.1C57 1.8 55 0 52.6 0");
}

.v10it4bzm {
  fill: var(--svg-color--b70000, #b70000);
  d: path("M51.3 2H12.7C10.4 2 9 3.7 9 5.8V34l46 24.3V6c0-2.1-1.4-4-3.7-4");
}

.y_wx04bbm {
  fill: var(--svg-color--333, #333);
  d: path("M55.4 58.2H8.6V34c24 0 46.8 10.2 46.8 24.2");
}
</style><path class="u55udyb2u"/><path class="v10it4bzm"/><circle class="b8p-1wb_q"/><path class="y_wx04bbm"/>`,
		"fallback": "emojione:flower-playing-cards",
	});
}

export default Component;
