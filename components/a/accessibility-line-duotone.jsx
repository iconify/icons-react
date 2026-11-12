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
		"content": `<style>.doy9q4b5f {
  cx: 12px;
  cy: 12px;
  r: 10px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.iloc7qlea {
  d: path("M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qhkpc2vdh {
  d: path("M12 12V13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19");
}

.srxr8c13n {
  d: path("M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z");
}

.x6iuzrmkz {
  d: path("M12 12V13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19");
}
</style><g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="srxr8c13n"/><path class="iloc7qlea"/><path class="qhkpc2vdh"/><path class="x6iuzrmkz"/></g>`,
		"fallback": "solar:accessibility-line-duotone",
	});
}

export default Component;
