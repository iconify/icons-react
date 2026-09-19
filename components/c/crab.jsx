import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/ronjz08st.css';
import '../../css/v/v9f1r8wfi.css';
import '../../css/e/e92ucll6c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQmGvxe4G"><g class="aql7dnt-u"><path class="ronjz08st"/><rect class="v9f1r8wfi"/><path class="e92ucll6c"/></g></mask></defs><path mask="url(#SVGQmGvxe4G)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:crab",
	});
}

export default Component;
