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
		"content": `<style>.rbo5gppcp {
  d: path("M12.714 14.036L10 16.75L6 18l1.75-3.5l5.5-5.5l2.25 2.25l-.735.735M6 18h6m3.5-3.25h5m-5 6.5h5m-4-6.5v1l3 4.5v1");
}

.rg13ilbpf {
  d: path("M12.7 21H3V2.5h15.5v9.4");
}

.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rg13ilbpf"/><path class="rbo5gppcp"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix-sharp:contract-signature-pending",
	});
}

export default Component;
