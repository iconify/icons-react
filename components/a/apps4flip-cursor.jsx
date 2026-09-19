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
		"content": `<style>.bvc9v94-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.715 20.305l18.62 8.63");
}

.kma_-gkmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.011 22.493l-.986 2.127m3.441-7.424l1.897-4.093m0 0l.3-.648a7.29 7.29 0 0 1 9.681-3.55h0a7.29 7.29 0 0 1 3.549 9.681l-2.625 5.664a3.833 3.833 0 0 0 1.865 5.09h0c1.921.89 4.2.055 5.09-1.866L42.5 24.72");
}

.z8cui692k {
  width: 3.804px;
  height: 5.838px;
  x: 18.337px;
  y: 16.926px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.902px;
  ry: 1.902px;
}

.zkph9ns3b {
  width: 20.522px;
  height: 28.351px;
  x: 7.141px;
  y: 11.789px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 10.261px;
  ry: 10.261px;
}
</style><rect transform="rotate(24.867 17.402 25.965)" class="zkph9ns3b"/><path class="bvc9v94-b"/><rect transform="rotate(24.867 20.238 19.845)" class="z8cui692k"/><path class="kma_-gkmh"/>`,
		"fallback": "arcticons:apps4flip-cursor",
	});
}

export default Component;
