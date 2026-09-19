import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/i/i_rbvcu_z.css';
import '../../css/s/saeqq1b-z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6GoIwbMs"><g class="ufeehvblu"><path class="i_rbvcu_z"/><path class="saeqq1b-z"/></g></mask></defs><path mask="url(#SVG6GoIwbMs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-excel",
	});
}

export default Component;
