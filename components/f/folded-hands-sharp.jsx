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
		"content": `<style>.q0ralojdi {
  fill: currentColor;
  d: path("M15.346 15.5v-2.761l-1.265-2.341q-.596.077-.992.533q-.397.456-.397 1.069v5.77L14.617 21h6.364L20 9.789L13.616 2.23l-.075.075q-.764.763-1.065 1.758t.199 1.888l3.556 6.54V15.5zm-7.596 0v-3.008l3.556-6.54q.5-.894.184-1.889q-.317-.994-1.056-1.757l-.068-.075L3.98 9.788L3 21h6.364l1.924-3.23V12q0-.613-.399-1.06q-.399-.446-.989-.523l-1.266 2.321V15.5z");
}
</style><path class="q0ralojdi"/>`,
		"fallback": "material-symbols-light:folded-hands-sharp",
	});
}

export default Component;
