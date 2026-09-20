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
		"content": `<style>.bvo_uyfuo {
  fill: var(--svg-color--5d32ed, #5d32ed);
  d: path("m12 15.442l-8.735 5.03h17.47z");
}

.ft5dv1b6b {
  fill: none;
}

.s7ss5e_ih {
  fill: var(--svg-color--00cab2, #00cab2);
  d: path("M12.265 3.529V14.91L21 19.941z");
}

.ujzigvbth {
  fill: var(--svg-color--b41870, #b41870);
  d: path("M11.735 3.529V14.91L3 19.941z");
}
</style><g class="ft5dv1b6b"><path class="ujzigvbth"/><path class="s7ss5e_ih"/><path class="bvo_uyfuo"/></g>`,
		"fallback": "token-branded:algb",
	});
}

export default Component;
