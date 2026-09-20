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
		"content": `<style>.ri_0zzb5m {
  fill: currentColor;
  d: path("M14.885 17.5v-1h3v1zm0-8v-1h6v1zm0 4v-1h5v1zM4.115 8h-1V7h3.731v-.885h2.538V7h3.732v1h-1v10h-8zm1 0v9h6V8zm0 0v9z");
}
</style><path class="ri_0zzb5m"/>`,
		"fallback": "material-symbols-light:delete-sweep-outline-sharp",
	});
}

export default Component;
