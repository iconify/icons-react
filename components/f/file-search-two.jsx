import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/el01ndb8a.css';
import '../../css/x/x6gu8c48n.css';
import '../../css/h/hd1thrbaq.css';
import '../../css/s/spoflublb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3FeuyceI"><g class="s9cl3zbei"><path class="el01ndb8a"/><path class="x6gu8c48n"/><circle class="hd1thrbaq"/><path class="spoflublb"/></g></mask></defs><path mask="url(#SVG3FeuyceI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-search-two",
	});
}

export default Component;
