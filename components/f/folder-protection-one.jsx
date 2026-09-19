import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/oxacldbke.css';
import '../../css/s/sulgn8ben.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkKkxDexZ"><g class="aql7dnt-u"><path class="oxacldbke"/><path class="sulgn8ben"/></g></mask></defs><path mask="url(#SVGkKkxDexZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-protection-one",
	});
}

export default Component;
