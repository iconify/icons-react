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
		"content": `<style>.fasox9btf {
  fill: var(--svg-color--fd4c27, #FD4C27);
  d: path("M17.51 12.968H4.025L2 22h8.49c3.361 0 7.639-2.568 7.639-7.032a3.03 3.03 0 0 0-.62-2");
}

.ft5dv1b6b {
  fill: none;
}

.u-geydb4u {
  fill: var(--svg-color--fa7438, #FA7438);
  d: path("m8.561 2.001l-2.045 9.032h13.729c.58-.632 1.755-2.426 1.755-4.58c0-3.665-3.071-4.49-4.607-4.452z");
}
</style><g class="ft5dv1b6b"><path class="u-geydb4u"/><path class="fasox9btf"/></g>`,
		"fallback": "token-branded:bump",
	});
}

export default Component;
