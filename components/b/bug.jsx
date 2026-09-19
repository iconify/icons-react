import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/brkrw9h7x.css';
import '../../css/t/ty_pvobpe.css';
import '../../css/y/y7js8hemd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrMDBveSg"><g class="v3_i3wktz"><path class="brkrw9h7x"/><path class="ty_pvobpe"/><path class="y7js8hemd"/></g></mask></defs><path mask="url(#SVGrMDBveSg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bug",
	});
}

export default Component;
