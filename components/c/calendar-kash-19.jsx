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
		"content": `<style>.abq6bsu5h {
  stroke-linecap: round;
  d: path("M39.9 16.105v23.412a4 4 0 0 1-4 4h-25a4 4 0 0 1-4-4v-25a4 4 0 0 1 4-4h14.953m-12.961-3l.016 6");
}

.ip4kr1nwm {
  d: path("M23.86 35.743c.553.83 1.52 1.382 3.042 1.382h.276a3.72 3.72 0 0 0 3.734-3.733v-3.733m-14.233-2.194l2.8-1.54m0 0v11.2");
}

.is-ytvijl {
  d: path("M39.9 16.105a3.985 3.985 0 1 0 0-7.97c-.086 0-.167.02-.253.025c-.653-2.124-2.608-3.677-4.946-3.677S30.41 6.036 29.755 8.16c-.085-.005-.166-.025-.252-.025a3.985 3.985 0 1 0 0 7.97z");
}

.mvpoq4hyo {
  cx: 27.178px;
  cy: 29.659px;
  r: 3.733px;
}

.to-5kdesz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
}

.wfpy3gbmy {
  stroke-linecap: round;
  d: path("M39.9 19.661h-33m33-3.556v23.412a4 4 0 0 1-4 4h-25a4 4 0 0 1-4-4v-25a4 4 0 0 1 4-4h14.953");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="mvpoq4hyo"/><path class="ip4kr1nwm"/></g><g class="to-5kdesz"><path class="wfpy3gbmy"/><path class="abq6bsu5h"/><path class="is-ytvijl"/></g>`,
		"fallback": "arcticons:calendar-kash-19",
	});
}

export default Component;
