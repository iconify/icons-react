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
		"content": `<style>.wsuetce1e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.75 2.25H4.25q-2.5 0-2.5 2.5q0 1.972 1.556 2.389q-.056.277-.056.611v12q0 .828.586 1.414t1.414.586t1.414-.586t.586-1.414v-12q0-.262-.059-.5h2.845q-.036.232-.036.5v12q0 .828.586 1.414T12 21.75t1.414-.586T14 19.75v-12q0-.268-.036-.5h2.822q-.036.232-.036.5v12q0 .828.586 1.414t1.414.586t1.414-.586t.586-1.414v-12q0-.37-.068-.672q.458-.182.836-.56q.732-.732.732-1.768t-.732-1.768t-1.768-.732");
}
</style><path class="wsuetce1e"/>`,
		"fallback": "uix-solid:colonnade",
	});
}

export default Component;
