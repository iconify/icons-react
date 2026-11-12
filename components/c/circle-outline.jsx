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
		"content": `<style>.xzftzdk-e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.25C6.0629 1.25 1.25 6.063 1.25 12C1.25 17.937 6.0629 22.75 12 22.75C17.9371 22.75 22.75 17.937 22.75 12C22.75 6.063 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.891 6.8914 2.75 12 2.75C17.1086 2.75 21.25 6.891 21.25 12C21.25 17.109 17.1086 21.25 12 21.25C6.8914 21.25 2.75 17.109 2.75 12Z");
}
</style><path clip-rule="evenodd" class="xzftzdk-e"/>`,
		"fallback": "solar:circle-outline",
	});
}

export default Component;
