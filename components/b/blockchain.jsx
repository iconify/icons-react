import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/svjez5bnv.css';
import '../../css/v/vzx4lwbww.css';
import '../../css/j/j9j20gb6q.css';
import '../../css/e/eh1mrdboo.css';
import '../../css/v/vlmvdt6mu.css';
import '../../css/w/ws7_-2m-s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtOwF8bCi"><g class="aql7dnt-u"><path class="svjez5bnv"/><path class="vzx4lwbww"/><path class="j9j20gb6q"/><circle class="eh1mrdboo"/><circle class="vlmvdt6mu"/><circle class="ws7_-2m-s"/></g></mask></defs><path mask="url(#SVGtOwF8bCi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:blockchain",
	});
}

export default Component;
