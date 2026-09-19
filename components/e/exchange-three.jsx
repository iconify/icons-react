import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/ulkx0nbdh.css';
import '../../css/t/tdrgxhknx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbSBuC8ZU"><g class="v3_i3wktz"><path class="ulkx0nbdh"/><path class="tdrgxhknx"/></g></mask></defs><path mask="url(#SVGbSBuC8ZU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:exchange-three",
	});
}

export default Component;
