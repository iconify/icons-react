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
		"content": `<style>.e8ijfhbec {
  fill: currentColor;
  d: path("M3 19v-1h9.039v1zm1-2.384V5h15.846v1H5v9.616h7.039v1zM20.192 18V9.77h-4.384V18zm-5.384 1V8.77h6.384V19zm3.189-6.5q.29 0 .483-.2q.193-.202.193-.47q0-.29-.193-.483t-.488-.193q-.273 0-.469.193t-.196.488q0 .273.2.469q.201.196.47.196M18 13.885");
}
</style><path class="e8ijfhbec"/>`,
		"fallback": "material-symbols-light:devices-outline-sharp",
	});
}

export default Component;
