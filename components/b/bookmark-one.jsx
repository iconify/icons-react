import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/itbdp0qfs.css';
import '../../css/e/egvpwab1r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7HDnWnPG"><g class="v3_i3wktz"><path class="itbdp0qfs"/><path class="egvpwab1r"/></g></mask></defs><path mask="url(#SVG7HDnWnPG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bookmark-one",
	});
}

export default Component;
