import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/o3eo20bpg.css';
import '../../css/j/jgkv41b5o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJ1qr9dfU"><g class="v3_i3wktz"><path clip-rule="evenodd" class="o3eo20bpg"/><path class="jgkv41b5o"/></g></mask></defs><path mask="url(#SVGJ1qr9dfU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:data-arrival",
	});
}

export default Component;
