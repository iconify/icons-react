import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fnj8l5-rq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 11.164v30.26L22.47 43.5h-2.075L7.832 29.08v-3.278l3.058-1.838l.929-7.447l-2.185-1.584l.437-1.967L21.815 4.5h1.092v5.954z");
}

.xzyob7vip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.176 19.248h-4.094c-.756 0-1.368.612-1.368 1.368v5.02c0 .756.612 1.368 1.368 1.368h4.094V23.4h.765M24 11.164v30.26l1.53 2.076h2.075l12.564-14.42v-3.278l-3.059-1.838l-.929-7.447l2.185-1.584l-.437-1.967L26.185 4.5h-1.092v5.954z");
}

.yt284bceq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.794 19.248H28.7c-.756 0-1.368.612-1.368 1.368v5.02c0 .756.612 1.368 1.368 1.368h4.094V23.4h.765");
}
</style><path class="fnj8l5-rq"/><path class="xzyob7vip"/><path class="yt284bceq"/>`,
		"fallback": "arcticons:game",
	});
}

export default Component;
