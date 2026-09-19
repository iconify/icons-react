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
		"content": `<style>.hs4hvcbag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.508 10.306a3.2 3.2 0 0 0-.98.236c-1.666.695-2.482 2.655-1.822 4.378m15.034 3.131c-.064.322-.18.64-.351.943c-.89 1.572-2.934 2.147-4.565 1.285");
}

.jgqh1-bgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.929 20.347a3.2 3.2 0 0 0-.91-.43c-1.735-.505-3.6.51-4.166 2.266m2.668 8.142l.11.109l-14.186 6.033L6.259 42.5l6.033-14.186l6.033-14.186");
}

.n436skb3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.815 5.5c.152.291.261.612.318.955c.292 1.782-.939 3.512-2.75 3.864");
}

.ti6pjbchl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.396 14.199l8.082 8.082l8.043 8.044M18.325 14.128l.07.07");
}
</style><path class="n436skb3f"/><path class="hs4hvcbag"/><path class="jgqh1-bgs"/><path class="ti6pjbchl"/>`,
		"fallback": "arcticons:emoji-party-popper",
	});
}

export default Component;
