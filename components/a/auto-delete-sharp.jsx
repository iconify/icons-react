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
		"content": `<style>.bt0w2cbqc {
  fill: currentColor;
  d: path("M6 20V6H5V5h4v-.77h6V5h4v1h-1v4.242q-.213-.048-.494-.068t-.506-.02q-.623 0-1.36.148t-1.294.396V8h-1v3.212q-.857.534-1.6 1.449q-.742.914-1.092 1.855V8h-1v9h.5q0 .723.196 1.548T10.866 20zm10.996 1.846q-2.013 0-3.428-1.418q-1.414-1.42-1.414-3.432t1.419-3.428q1.419-1.414 3.431-1.414t3.428 1.419t1.414 3.431t-1.418 3.428q-1.42 1.414-3.432 1.414m1.654-2.65l.546-.546l-1.811-1.804v-2.73h-.77v3.046z");
}
</style><path class="bt0w2cbqc"/>`,
		"fallback": "material-symbols-light:auto-delete-sharp",
	});
}

export default Component;
