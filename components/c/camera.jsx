import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vkjbvwbld.css';
import '../../css/v/vw9h3sbzb.css';
import '../../css/z/zs6rexpdd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRV4b4dqK"><g class="ufeehvblu"><path class="vkjbvwbld"/><rect class="vw9h3sbzb"/><path class="zs6rexpdd"/></g></mask></defs><path mask="url(#SVGRV4b4dqK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:camera",
	});
}

export default Component;
