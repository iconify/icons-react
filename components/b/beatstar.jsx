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
		"content": `<style>.c0wwv4bkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 30.373h39v3.259h-39z");
}

.ioewulbpj {
  d: path("M11.117 16.149H8.749L4.5 30.373h39l-4.249-14.224h-2.368");
}

.kkcmfab9h {
  d: path("M38.765 25.041v2.744H9.235v-2.744l2.367-10.673h24.796zM11 25.389h26");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ioewulbpj"/><path class="kkcmfab9h"/></g><path class="c0wwv4bkg"/>`,
		"fallback": "arcticons:beatstar",
	});
}

export default Component;
