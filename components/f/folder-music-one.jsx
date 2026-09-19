import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/oxacldbke.css';
import '../../css/d/dsln90bva.css';
import '../../css/h/hlibm728q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGr59EXdJI"><g class="aql7dnt-u"><path class="oxacldbke"/><path class="dsln90bva"/><circle class="hlibm728q"/></g></mask></defs><path mask="url(#SVGr59EXdJI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-music-one",
	});
}

export default Component;
