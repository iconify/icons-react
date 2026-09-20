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
		"content": `<style>.beaf9ac8r {
  fill: var(--svg-color--fff, #fff);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.grcmukbty {
  fill: var(--svg-color--00f8ff, #00f8ff);
  d: path("M4 6.5h14v13H4z");
}

.mmfyo5b-e {
  fill: var(--svg-color--000, #000);
  d: path("M5 5.502h14v13H5z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.qjkpuomzo {
  fill: var(--svg-color--fff, #fff);
  d: path("M9 9.5h6l-.55.75H10.5v1.25h4.325l-.66.75H10.5v2.25H9z");
}

.qphf_rk4u {
  fill: var(--svg-color--red, red);
  d: path("M9.5 9.002h6l-.55.75H11v1.25h4.326l-.66.75H11v2.25H9.5z");
}

.s5mls-hjo {
  fill: var(--svg-color--red, red);
  d: path("M6.5 4.5H20V18H6.5z");
}

.vrzoejbxi {
  fill: var(--svg-color--00f8ff, #00f8ff);
  d: path("M8.5 10h6l-.55.75H10V12h4.326l-.66.75H10V15H8.5z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="beaf9ac8r"/><path class="s5mls-hjo"/><path class="grcmukbty"/><path class="mmfyo5b-e"/><path class="vrzoejbxi"/><path class="qphf_rk4u"/><path class="qjkpuomzo"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:foom-background",
	});
}

export default Component;
