import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t-3sezc-r {
  fill: currentColor;
  d: path("M6.308 17.423h5.384v-.142q0-.347-.189-.643q-.19-.296-.518-.438q-.443-.206-.945-.309q-.503-.103-1.04-.103t-1.04.103q-.502.103-.944.309q-.33.142-.519.438q-.19.296-.19.643zM14 15.885h4V15h-4zm-4.159-1.231q.351-.347.351-.842t-.346-.846t-.842-.35t-.845.346t-.351.841t.346.846t.841.351t.846-.347M14 13.5h4v-.885h-4zM3 21V8h7V3h4v5h7v13zm8-11.23h2V4h-2z");
}
</style><path class="t-3sezc-r"/>`,
		"fallback": "material-symbols-light:badge-sharp",
	});
}

export default Component;
