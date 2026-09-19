import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/t/txwygjb8d.css';
import '../../css/w/wyahbkbgb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXSFC601V"><g class="ufeehvblu"><path class="txwygjb8d"/><path class="wyahbkbgb"/></g></mask></defs><path mask="url(#SVGXSFC601V)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:config",
	});
}

export default Component;
