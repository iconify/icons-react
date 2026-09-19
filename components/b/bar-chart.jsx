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
		"content": `<style>.br8rc7bua {
  fill: var(--svg-color--fb4f00, #fb4f00);
  d: path("M38.7 60h12V6.7L38.7 20z");
}

.ch0-dx94m {
  fill: var(--svg-color--106995, #106995);
  d: path("M4 60h12V33.3L4 46.7z");
}

.jrn9ltmdt {
  d: path("M0 0h4v64H0z");
}

.jux0gmb6n {
  fill: var(--svg-color--9aca0a, #9aca0a);
  d: path("M33.3 20h13.3v40H33.3z");
}

.m4mhreqyc {
  d: path("M0 60h64v4H0z");
}

.rlkwf7b-x {
  fill: var(--svg-color--21adf1, #21adf1);
  d: path("M16 33.3h13.3V60H16z");
}

.ts5_v5gqy {
  fill: var(--svg-color--5c750a, #5c750a);
  d: path("M21.3 60h12V20l-12 13.3z");
}

.tybcrmi-m {
  fill: var(--svg-color--333, #333);
}

.x91k08b9x {
  fill: var(--svg-color--fc9100, #fc9100);
  d: path("M50.7 6.7H64V60H50.7z");
}
</style><g class="tybcrmi-m"><path class="jrn9ltmdt"/><path class="m4mhreqyc"/></g><path class="br8rc7bua"/><path class="ts5_v5gqy"/><path class="ch0-dx94m"/><path class="jux0gmb6n"/><path class="rlkwf7b-x"/><path class="x91k08b9x"/>`,
		"fallback": "emojione:bar-chart",
	});
}

export default Component;
