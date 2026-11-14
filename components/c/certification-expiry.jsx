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
		"content": `<style>.mhdtkqbry {
  d: path("m8 2.5l1.165 1.153l1.585-.416l.432 1.581l1.581.432l-.416 1.585L13.5 8l-1.153 1.165l.416 1.585l-1.581.432l-.432 1.581l-1.585-.416L8 13.5l-1.165-1.153l-1.585.416l-.432-1.581l-1.581-.432l.416-1.585L2.5 8l1.153-1.165l-.416-1.585l1.581-.432l.432-1.581l1.585.416Z");
}

.qakcsxr8q {
  d: path("M5.5 12.75v7.75L7.75 19L10 20.5v-7.75M15.5 11h6m-6 10h6m-4.75-10v1.5l3.5 7V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vucp2m5ge {
  d: path("M20.25 11v1.5l-3.5 7V21");
}
</style><g class="ulnmmdpxh"><path class="mhdtkqbry"/><path class="qakcsxr8q"/><path class="vucp2m5ge"/></g>`,
		"fallback": "uix-sharp:certification-expiry",
	});
}

export default Component;
