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
		"content": `<style>.fdrp62-hm {
  stop-color: var(--svg-color--52ba00, #52ba00);
}

.ft5dv1b6b {
  fill: none;
}

.nb9a_lbxh {
  stop-color: var(--svg-color--beea2e, #beea2e);
}

.xuumaxiai {
  d: path("m19.676 17.922l-6.353-2.934V8.49l6.353-2.232zm-9 3.078l-6.353-2.862V6.564l6.353 2.862zm0-12.024L4.567 6.159L13.5 3l6.077 2.826z");
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGC6LlQdTM)" class="xuumaxiai"/><defs><linearGradient id="SVGC6LlQdTM" x1="4.665" x2="15.728" y1="18.41" y2="8.872" gradientUnits="userSpaceOnUse"><stop class="nb9a_lbxh"/><stop offset="1" class="fdrp62-hm"/></linearGradient></defs></g>`,
		"fallback": "token-branded:gas",
	});
}

export default Component;
