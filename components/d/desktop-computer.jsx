import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ecc75pdhv {
  fill: var(--svg-color--ccd6dd, #ccd6dd);
  d: path("M13 26h10v6H13z");
}

.euc-7wmwj {
  fill: var(--svg-color--9aaab4, #9aaab4);
  d: path("M13 26h10v2H13z");
}

.hipo4acdz {
  fill: var(--svg-color--5dadec, #5dadec);
  d: path("M4 4h28v18H4z");
}

.kzcv0goje {
  fill: var(--svg-color--e1e8ed, #e1e8ed);
  d: path("M36 33a3 3 0 0 0-3-3H3a3 3 0 1 0 0 6h30a3 3 0 0 0 3-3");
}

.u3-_o7enm {
  fill: var(--svg-color--ccd6dd, #ccd6dd);
  d: path("M36 22a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.yif_r-f9b {
  fill: var(--svg-color--f5f8fa, #f5f8fa);
  d: path("M3 32h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z");
}
</style><path class="u3-_o7enm"/><path class="hipo4acdz"/><path class="ecc75pdhv"/><path class="euc-7wmwj"/><path class="kzcv0goje"/><path class="yif_r-f9b"/>`,
		"fallback": "twemoji:desktop-computer",
	});
}

export default Component;
