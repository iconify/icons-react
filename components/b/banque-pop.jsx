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
		"content": `<style>.a46k2-bgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.92 16.461l6.053 8.16l-6.053 8.5h4.513l3.753-5.25l3.625 5.25h4.556l-5.839-8.5l5.839-8.117h-4.555l-3.626 5.069l-3.753-5.133z");
}

.vbkxwab_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.575 22.792l6.341.021v-6.352h3.967l-.15 6.33h6.139v4.064h-6.063l.085 6.566h-3.978l-.214-6.576H5.575V42.5h26.028l10.822-10.726V5.5H16.493L5.575 16.461z");
}
</style><path class="vbkxwab_f"/><path class="a46k2-bgv"/>`,
		"fallback": "arcticons:banque-pop",
	});
}

export default Component;
