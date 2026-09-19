import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5ke29wou.css';
import '../../css/s/skcz4vabf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGruW5zblY"><g class="ft5dv1b6b"><rect class="r5ke29wou"/><path class="skcz4vabf"/></g></mask></defs><path mask="url(#SVGruW5zblY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:extend",
	});
}

export default Component;
