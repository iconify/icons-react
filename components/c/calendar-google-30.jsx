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
		"content": `<style>.m_qu49eyo {
  d: path("M17.419 20.278c.667-.556 1.333-.778 2.778-.778h.889c1.222 0 2.222 1 2.222 2.222s-1 2.222-2.222 2.222h-2.223");
}

.ofwa-kbgx {
  d: path("M24.692 25.5c0 1.667 1.334 3 3 3s2.89-1.333 2.89-3v-3c0-1.667-1.334-3-2.89-3s-3 1.333-3 3zm-3.607-1.556c1.223 0 2.223 1 2.223 2.223s-1 2.222-2.223 2.222h-.889c-1.555 0-2.11-.222-2.777-.778");
}

.uph4zqc9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h24l9-9v-24a4 4 0 0 0-4-4m-5 0v37m-19-28v28m28-9h-37m37-19h-28");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ofwa-kbgx"/><path class="m_qu49eyo"/></g><path class="uph4zqc9i"/>`,
		"fallback": "arcticons:calendar-google-30",
	});
}

export default Component;
