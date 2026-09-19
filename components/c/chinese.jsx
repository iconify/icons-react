import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/d/dc6lm7bsh.css';
import '../../css/s/s410bdces.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGC57gpd2B"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="dc6lm7bsh"/><path class="s410bdces"/></g></mask></defs><path mask="url(#SVGC57gpd2B)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chinese",
	});
}

export default Component;
