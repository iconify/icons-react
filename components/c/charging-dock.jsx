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
		"content": `<style>.d9cg8vbcd {
  d: path("m11.689 7.841l-1.315 1.973a.602.602 0 0 0 .501.936a.934.934 0 0 1 .918 1.106l-.168.894a.389.389 0 0 0 .712.28l1.312-2.079a.62.62 0 0 0-.524-.951a.922.922 0 0 1-.904-1.103l.154-.772a.378.378 0 0 0-.686-.284");
}

.fiog4jbsq {
  d: path("M10.5 2.5h3A3.5 3.5 0 0 1 17 6v9.25a3.5 3.5 0 0 1-3.5 3.5h-3a3.5 3.5 0 0 1-3.5-3.5V6a3.5 3.5 0 0 1 3.5-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4btll8su {
  d: path("M2.5 15.5v4a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-4");
}
</style><g class="hntgybcog"><path class="y4btll8su"/><path class="fiog4jbsq"/><path class="d9cg8vbcd"/></g>`,
		"fallback": "uix:charging-dock",
	});
}

export default Component;
