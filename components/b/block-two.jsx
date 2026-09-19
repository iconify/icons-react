import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvpaucbgz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGE5LEqc1m"><path class="lvpaucbgz"/></mask></defs><path mask="url(#SVGE5LEqc1m)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:block-two",
	});
}

export default Component;
