import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/d/dvdxzjbve.css';
import '../../css/s/st9lwgxpb.css';
import '../../css/b/bt-agubjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="xhdah4bbl"/><path class="dvdxzjbve"/><path class="st9lwgxpb"/><path class="bt-agubjg"/></g>`,
		"fallback": "icon-park:f-one-key",
	});
}

export default Component;
