import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lgf1f5r6u {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zm0 1h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4m-1.782 5c.446 0 .607.046.77.134q.246.132.378.378c.088.163.134.324.134.77v2.436c0 .446-.046.607-.134.77a.9.9 0 0 1-.378.378c-.162.088-.324.134-.77.134H7.282c-.446 0-.607-.046-.77-.134a.9.9 0 0 1-.378-.378c-.088-.162-.134-.324-.134-.77v-2.436c0-.446.046-.607.134-.77a.9.9 0 0 1 .378-.378c.163-.088.324-.134.77-.134zm.194 1.002H7.088l-.08.005l-.006.08v2.825l.005.08l.08.006h5.825l.08-.005l.006-.08v-2.825l-.005-.08zM13.5 6a.5.5 0 0 1 .09.992L13.5 7h-7a.5.5 0 0 1-.09-.992L6.5 6z");
}
</style><path class="lgf1f5r6u"/>`,
		"fallback": "fluent:calendar-day-20-regular",
	});
}

export default Component;
