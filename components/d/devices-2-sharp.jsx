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
		"content": `<style>.ja1h_1buo {
  fill: currentColor;
  d: path("M14.808 19V8.77h6.384V19zm3.188-6.5q.29 0 .484-.2q.193-.202.193-.47q0-.29-.193-.483t-.488-.193q-.273 0-.469.193t-.196.488q0 .273.2.469q.201.196.47.196M3 19V5h18.192v1H12.04v13z");
}
</style><path class="ja1h_1buo"/>`,
		"fallback": "material-symbols-light:devices-2-sharp",
	});
}

export default Component;
