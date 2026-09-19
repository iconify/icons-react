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
		"content": `<style>.gi_id6b-a {
  d: path("M32.95 42.351c.052.207.413.207.413-.051l3.35-18.76l-9.535.824zm-8.71-27.109l2.938 9.122L8.367 25.91c-.207 0-.31-.257-.155-.412z");
}

.pgrtl70hp {
  d: path("M39.393 5.553L24.24 15.242v.051l2.938 9.02l9.535-.773l3.144-17.627c.051-.309-.258-.515-.464-.36");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="gi_id6b-a"/><path class="pgrtl70hp"/></g>`,
		"fallback": "arcticons:boursobank",
	});
}

export default Component;
